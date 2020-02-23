import gql from 'graphql-tag';

export interface ISearchArticlesData {
    searchArticles?: Array<({
        searchable: IArticleData
    } | undefined)>
}

export interface ISearchDraftsData {
    searchUnpublishedArticles?: Array<({
        searchable: IArticleData
    } | undefined)>
}

export interface ISearchVariables {
    query: string
}

export interface ISearchUsersData {
    searchUserBySlug?: Array<({
        searchable: IUserData
    } | undefined)>
}

export const USER_SEARCH_QUERY = gql`
query UserQuery($query: String!) {
    searchUserBySlug(query: $query) {
        first_name
        last_name
        email
    }
}`

export const ARTICLE_SEARCH_QUERY = gql`
query SearchQuery($query: String!) {
    searchArticles(query: $query) {
        searchable {
            id
            title
            preview
            slug
            volume
            issue
            created_at
            contributors {
                slug
                first_name
                last_name
            }
            section {
                permalink
                id
                name
            }
        }
    }
}`

export const DRAFT_SEARCH_QUERY = gql`
query DraftQuery($query: String!) {
    searchUnpublishedArticles(query: $query) {
        searchable {
            id
            title
            preview
            slug
            volume
            issue
            created_at
            contributors {
                slug
                first_name
                last_name
            }
            section {
                permalink
                id
                name
            }
        }
    }
}
`

export interface IArticleData {
    id: string,
    title: string,
    preview?: string,
    slug: string,
    volume: number,
    issue: number,
    created_at?: string
    contributors?: Array<{ first_name?: string, last_name?: string, slug: string }>,
    section: { permalink: string, id: string, name: string }
}

export interface IUserData {
    first_name: string,
    last_name: string,
    email: string
}

export interface ISearchResults {
    searchable: IArticleData
}

export interface IUserSearchResults {
    searchable: IUserData
}
