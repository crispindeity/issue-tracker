package team20.issuetracker.login.oauth.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import team20.issuetracker.domain.member.Member;
import team20.issuetracker.login.oauth.Role;

@NoArgsConstructor
@Getter
public class ResponseUserDto {
    @JsonProperty("id")
    private String oauthId;
    @JsonProperty("email")
    private String email;
    @JsonProperty("login")
    private String name;
    @JsonProperty("avatar_url")
    private String profileImageUrl;

    @Builder
    public ResponseUserDto(String oauthId, String email, String name, String profileImageUrl) {
        this.oauthId = oauthId;
        this.email = email;
        this.name = name;
        this.profileImageUrl = profileImageUrl;
    }

    public Member toMember() {
        return Member.builder()
                .oauthId(oauthId)
                .email(email)
                .name(name)
                .profileImageUrl(profileImageUrl)
                .role(Role.GUEST)
                .build();
    }

    public Member toMemberByTest() {
        return Member.builder()
                .id(1L)
                .oauthId(oauthId)
                .email(email)
                .name(name)
                .profileImageUrl(profileImageUrl)
                .role(Role.GUEST)
                .build();
    }
}
