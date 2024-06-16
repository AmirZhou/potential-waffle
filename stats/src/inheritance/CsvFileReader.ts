import { readFileSync } from 'node:fs';
import { MatchResult } from './MatchResults';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export abstract class CsvFileReader<T> {
  abstract data: T[];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = readFileSync(this.filename, {
      encoding: 'utf-8',
    })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow); // notice don't call the function here
  }
}
