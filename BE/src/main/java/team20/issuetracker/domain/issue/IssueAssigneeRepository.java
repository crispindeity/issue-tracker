package team20.issuetracker.domain.issue;

import org.springframework.data.jpa.repository.JpaRepository;

public interface IssueAssigneeRepository extends JpaRepository<IssueAssignee, Long> {
}
