import { ILabel } from '@/types/labelTypes';
import { IMilestone } from '@/types/milestoneTypes';

export type IssueStatusType = 'open' | 'closed';

export type ApiType = 'issues' | 'labels' | 'milestones' | 'assignees';

export type Assignee = {
  id: number;
  userId: string;
  image: string;
};

export type ModifiedAssignee = Assignee & {
  name: string;
};

export type AssigneeDataType = {
  assignees: Assignee[];
};

export type CommentDataType = {
  issueId: number;
  content: string;
};

type Comment = CommentDataType & {
  id: number;
};

export type IssueEditDataType = {
  title: string;
  author: string;
  createdAt: string;
  image: string;
  content: string;
};

export type IssueType = IssueEditDataType & {
  id: number;
  commentCount: number;
  milestones: IMilestone[] | [];
  comments: Comment[] | [];
  labels: ILabel[] | [];
  assignees: Assignee[] | [];
  issueStatus: IssueStatusType;
};

interface Pageable {
  first: boolean;
  hasNext: boolean;
  last: boolean;
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}
export interface IssuesDataType {
  openIssueCount: number;
  closedIssueCount: number;
  issues: IssueType[] | [];
  pageable: Pageable;
}

export interface IssueFilter {
  is: IssueStatusType;
  title: string | undefined;
  author: string | undefined;
  label: string[];
  milestone: string | undefined;
  assignee: string | undefined;
  commentedBy: string | undefined;
  page: number;
}

export type PostIssueType = {
  title: string;
  content: string;
  assigneeIds: number[];
  labelIds: number[];
  milestoneIds: number[];
};
