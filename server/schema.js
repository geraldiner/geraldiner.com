const { gql } = require("apollo-server");

const typeDefs = gql`
	type Query {
		getAbout: About
		getFeaturedRepos: [Repository]
		getRecentRepos: [Repository]
	}
	type UserStatus {
		emojiHTML: String
		message: String
	}
	type About {
		id: String
		name: String
		bio: String
		avatarUrl: String
		location: String
		url: String
		status: UserStatus
		company: String
		isHireable: Boolean
	}
	type Commit {
		message: String
		pushedAt: String
	}
	type Repository {
		name: String
		description: String
		homepageUrl: String
		updatedAt: String
		url: String
		openGraphImageUrl: String
		commitCount: Int
		# branchCount: Int
		languages: [Language]
		topics: [RepositoryTopic]
	}
	type Language {
		color: String
		name: String
	}
	type RepositoryTopic {
		topic: Topic
	}
	type Topic {
		name: String
	}
`;

module.exports = typeDefs;
