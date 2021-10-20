/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateWorld = /* GraphQL */ `
  subscription OnCreateWorld {
    onCreateWorld {
      id
      title
      slug
      content
      createdAt
      updatedAt
      parties {
        items {
          id
          name
          slug
        }
        nextToken
      }
      characters {
        items {
          id
          name
          type
          avatar
          race
          alignment
          gender
          status
        }
        nextToken
      }
      occurrences {
        items {
          id
          title
          summary
          content
          reckoning
          status
          type
        }
        nextToken
      }
    }
  }
`;
export const onUpdateWorld = /* GraphQL */ `
  subscription OnUpdateWorld {
    onUpdateWorld {
      id
      title
      slug
      content
      createdAt
      updatedAt
      parties {
        items {
          id
          name
          slug
        }
        nextToken
      }
      characters {
        items {
          id
          name
          type
          avatar
          race
          alignment
          gender
          status
        }
        nextToken
      }
      occurrences {
        items {
          id
          title
          summary
          content
          reckoning
          status
          type
        }
        nextToken
      }
    }
  }
`;
export const onDeleteWorld = /* GraphQL */ `
  subscription OnDeleteWorld {
    onDeleteWorld {
      id
      title
      slug
      content
      createdAt
      updatedAt
      parties {
        items {
          id
          name
          slug
        }
        nextToken
      }
      characters {
        items {
          id
          name
          type
          avatar
          race
          alignment
          gender
          status
        }
        nextToken
      }
      occurrences {
        items {
          id
          title
          summary
          content
          reckoning
          status
          type
        }
        nextToken
      }
    }
  }
`;
export const onCreateParty = /* GraphQL */ `
  subscription OnCreateParty {
    onCreateParty {
      id
      name
      slug
      world {
        id
        title
        slug
        content
        createdAt
        updatedAt
        parties {
          nextToken
        }
        characters {
          nextToken
        }
        occurrences {
          nextToken
        }
      }
      characters {
        items {
          id
          name
          type
          avatar
          race
          alignment
          gender
          status
        }
        nextToken
      }
      occurrences {
        items {
          id
          title
          summary
          content
          reckoning
          status
          type
        }
        nextToken
      }
    }
  }
`;
export const onUpdateParty = /* GraphQL */ `
  subscription OnUpdateParty {
    onUpdateParty {
      id
      name
      slug
      world {
        id
        title
        slug
        content
        createdAt
        updatedAt
        parties {
          nextToken
        }
        characters {
          nextToken
        }
        occurrences {
          nextToken
        }
      }
      characters {
        items {
          id
          name
          type
          avatar
          race
          alignment
          gender
          status
        }
        nextToken
      }
      occurrences {
        items {
          id
          title
          summary
          content
          reckoning
          status
          type
        }
        nextToken
      }
    }
  }
`;
export const onDeleteParty = /* GraphQL */ `
  subscription OnDeleteParty {
    onDeleteParty {
      id
      name
      slug
      world {
        id
        title
        slug
        content
        createdAt
        updatedAt
        parties {
          nextToken
        }
        characters {
          nextToken
        }
        occurrences {
          nextToken
        }
      }
      characters {
        items {
          id
          name
          type
          avatar
          race
          alignment
          gender
          status
        }
        nextToken
      }
      occurrences {
        items {
          id
          title
          summary
          content
          reckoning
          status
          type
        }
        nextToken
      }
    }
  }
`;
export const onCreateCharacter = /* GraphQL */ `
  subscription OnCreateCharacter {
    onCreateCharacter {
      id
      name
      type
      avatar
      race
      alignment
      gender
      status
      world {
        id
        title
        slug
        content
        createdAt
        updatedAt
        parties {
          nextToken
        }
        characters {
          nextToken
        }
        occurrences {
          nextToken
        }
      }
      party {
        id
        name
        slug
        world {
          id
          title
          slug
          content
          createdAt
          updatedAt
        }
        characters {
          nextToken
        }
        occurrences {
          nextToken
        }
      }
      occurrences {
        items {
          id
          title
          summary
          content
          reckoning
          status
          type
        }
        nextToken
      }
    }
  }
`;
export const onUpdateCharacter = /* GraphQL */ `
  subscription OnUpdateCharacter {
    onUpdateCharacter {
      id
      name
      type
      avatar
      race
      alignment
      gender
      status
      world {
        id
        title
        slug
        content
        createdAt
        updatedAt
        parties {
          nextToken
        }
        characters {
          nextToken
        }
        occurrences {
          nextToken
        }
      }
      party {
        id
        name
        slug
        world {
          id
          title
          slug
          content
          createdAt
          updatedAt
        }
        characters {
          nextToken
        }
        occurrences {
          nextToken
        }
      }
      occurrences {
        items {
          id
          title
          summary
          content
          reckoning
          status
          type
        }
        nextToken
      }
    }
  }
`;
export const onDeleteCharacter = /* GraphQL */ `
  subscription OnDeleteCharacter {
    onDeleteCharacter {
      id
      name
      type
      avatar
      race
      alignment
      gender
      status
      world {
        id
        title
        slug
        content
        createdAt
        updatedAt
        parties {
          nextToken
        }
        characters {
          nextToken
        }
        occurrences {
          nextToken
        }
      }
      party {
        id
        name
        slug
        world {
          id
          title
          slug
          content
          createdAt
          updatedAt
        }
        characters {
          nextToken
        }
        occurrences {
          nextToken
        }
      }
      occurrences {
        items {
          id
          title
          summary
          content
          reckoning
          status
          type
        }
        nextToken
      }
    }
  }
`;
export const onCreateOccurrence = /* GraphQL */ `
  subscription OnCreateOccurrence {
    onCreateOccurrence {
      id
      title
      summary
      content
      reckoning
      status
      type
      world {
        id
        title
        slug
        content
        createdAt
        updatedAt
        parties {
          nextToken
        }
        characters {
          nextToken
        }
        occurrences {
          nextToken
        }
      }
      party {
        id
        name
        slug
        world {
          id
          title
          slug
          content
          createdAt
          updatedAt
        }
        characters {
          nextToken
        }
        occurrences {
          nextToken
        }
      }
      character {
        id
        name
        type
        avatar
        race
        alignment
        gender
        status
        world {
          id
          title
          slug
          content
          createdAt
          updatedAt
        }
        party {
          id
          name
          slug
        }
        occurrences {
          nextToken
        }
      }
    }
  }
`;
export const onUpdateOccurrence = /* GraphQL */ `
  subscription OnUpdateOccurrence {
    onUpdateOccurrence {
      id
      title
      summary
      content
      reckoning
      status
      type
      world {
        id
        title
        slug
        content
        createdAt
        updatedAt
        parties {
          nextToken
        }
        characters {
          nextToken
        }
        occurrences {
          nextToken
        }
      }
      party {
        id
        name
        slug
        world {
          id
          title
          slug
          content
          createdAt
          updatedAt
        }
        characters {
          nextToken
        }
        occurrences {
          nextToken
        }
      }
      character {
        id
        name
        type
        avatar
        race
        alignment
        gender
        status
        world {
          id
          title
          slug
          content
          createdAt
          updatedAt
        }
        party {
          id
          name
          slug
        }
        occurrences {
          nextToken
        }
      }
    }
  }
`;
export const onDeleteOccurrence = /* GraphQL */ `
  subscription OnDeleteOccurrence {
    onDeleteOccurrence {
      id
      title
      summary
      content
      reckoning
      status
      type
      world {
        id
        title
        slug
        content
        createdAt
        updatedAt
        parties {
          nextToken
        }
        characters {
          nextToken
        }
        occurrences {
          nextToken
        }
      }
      party {
        id
        name
        slug
        world {
          id
          title
          slug
          content
          createdAt
          updatedAt
        }
        characters {
          nextToken
        }
        occurrences {
          nextToken
        }
      }
      character {
        id
        name
        type
        avatar
        race
        alignment
        gender
        status
        world {
          id
          title
          slug
          content
          createdAt
          updatedAt
        }
        party {
          id
          name
          slug
        }
        occurrences {
          nextToken
        }
      }
    }
  }
`;
