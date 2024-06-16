import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResults';
import { MatchData } from './MatchData';

export interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];
  dataReader: DataReader;

  constructor(dataReader: DataReader) {
    this.dataReader = dataReader;
  }

  load(): void {
    this.dataReader.read();
    const rows = this.dataReader.data;
    this.matches = rows.map(this.mapRow);
  }

  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}
