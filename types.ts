
export interface Milestone {
  id: string;
  title: string;
  completed: boolean;
}

export interface Goal {
  id: string;
  title: string;
  category: GoalCategory;
  deadline: string;
  milestones: Milestone[];
  isRecalculating?: boolean;
}

export enum GoalCategory {
  CAREER = 'Carriera',
  HEALTH = 'Salute',
  FINANCE = 'Finanza',
  PERSONAL = 'Personale',
  LEARNING = 'Apprendimento'
}

export interface SharedProgress {
  id: string;
  userName: string;
  isAnonymous: boolean;
  goalTitle: string;
  progressPercentage: number;
  timestamp: string;
}
