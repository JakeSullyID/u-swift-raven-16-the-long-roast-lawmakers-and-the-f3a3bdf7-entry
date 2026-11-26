// The roast opens on lawmakers flexing authority over autonomous machines, then collapses that authority with one file they cannot convert.
// It builds tension through a senator grilling a CEO on AI safety, then collapses into the print-scan-email workaround his own office needed.
// The sting lands on the last words, where the signed bill itself becomes the proof of their incompetence.
import * as fs from 'fs';
import * as path from 'path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
const sentence = "The senator who spent three hours grilling a tech CEO about AI safety had an aide print the bill, scan it, and email him the PDF — then voted to regulate the machines that would have done it in one click.";
fs.writeFileSync(path.join(outputDir, 'entry.txt'), sentence, 'utf-8');
