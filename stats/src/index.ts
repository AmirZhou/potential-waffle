import { HTMLReport } from './reportTargets/HTMLReport';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';

const reader = new MatchReader(new CsvFileReader('football.csv'));
reader.load();
const matches = reader.matches;

const summary = new Summary(
  new WinsAnalysis('Man United'),
  // new ConsoleReport()
  new HTMLReport()
);

summary.buildAndPrint(matches);
