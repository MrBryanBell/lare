import type { SubjectContract } from './subject';

export interface PensumSubjectContract extends SubjectContract {
  cycleOrigin       : number;
  enrollments       : number;
  area              : string;
}
