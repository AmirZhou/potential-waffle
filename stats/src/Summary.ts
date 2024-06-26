import { MatchData } from './MatchData';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrint(matches: MatchData[]) {
    const analyzResult = this.analyzer.run(matches);
    this.outputTarget.print(analyzResult);
  }
}
