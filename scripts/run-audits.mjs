import { execSync } from 'node:child_process';
import fs from 'node:fs';

const routes = [
  { name: 'Home', path: '/', output: './lighthouse-home.json' },
  { name: 'About', path: '/about', output: './lighthouse-about.json' },
  { name: 'Services', path: '/services', output: './lighthouse-services.json' },
  { name: 'Insurance FAQ', path: '/insurance-faq', output: './lighthouse-insurance-faq.json' },
  { name: 'Contact', path: '/contact', output: './lighthouse-contact.json' },
];

const results = [];

for (const route of routes) {
  const url = 'http://localhost:3000' + route.path;
  console.log('\n========================================');
  console.log('Auditing ' + route.name + ' (' + url + ')...');
  console.log('========================================');

  try {
    execSync(
      'npx -y lighthouse ' + url + ' --output=json --output-path=' + route.output + ' --chrome-flags="--headless" --only-categories=performance,accessibility,best-practices,seo',
      { stdio: 'inherit' }
    );
  } catch (err) {
    console.log('Finished with status (checking ' + route.output + ')...');
  }

  if (fs.existsSync(route.output)) {
    try {
      const raw = fs.readFileSync(route.output, 'utf8');
      const data = JSON.parse(raw);
      const perf = Math.round((data.categories.performance?.score || 0) * 100);
      const a11y = Math.round((data.categories.accessibility?.score || 0) * 100);
      const bp = Math.round((data.categories['best-practices']?.score || 0) * 100);
      const seo = Math.round((data.categories.seo?.score || 0) * 100);

      results.push({
        name: route.name,
        path: route.path,
        performance: perf,
        accessibility: a11y,
        bestPractices: bp,
        seo: seo,
      });

      console.log('Scores for ' + route.name + ':');
      console.log('  Performance:    ' + perf);
      console.log('  Accessibility:  ' + a11y);
      console.log('  Best Practices: ' + bp);
      console.log('  SEO:            ' + seo);
    } catch (parseErr) {
      console.error('Failed to parse ' + route.output + ':', parseErr.message);
    }
  } else {
    console.error('File ' + route.output + ' was not created.');
  }
}

console.log('\n\n================ FINAL SUMMARY ================');
console.table(results);
fs.writeFileSync('./lighthouse-summary.json', JSON.stringify(results, null, 2));
