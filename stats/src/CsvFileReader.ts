import { readFileSync } from 'node:fs';
import { DataReader } from './MatchReader';

export class CsvFileReader implements DataReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = readFileSync(this.filename, {
      encoding: 'utf-8',
    })
      .split('\n')
      .map((match: string): string[] => {
        return match.split(',');
      });
  }
}
