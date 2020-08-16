/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateWorld = /* GraphQL */ `
  subscription OnCreateWorld {
    onCreateWorld {
      id
      title
      slug
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
        }
        nextToken
      }
      occurrences {
        items {
          id
          title
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
        }
        nextToken
      }
      occurrences {
        items {
          id
          title
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
        }
        nextToken
      }
      occurrences {
        items {
          id
          title
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
        }
        nextToken
      }
      occurrences {
        items {
          id
          title
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
        }
        nextToken
      }
      occurrences {
        items {
          id
          title
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
        }
        nextToken
      }
      occurrences {
        items {
          id
          title
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
      world {
        id
        title
        slug
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
      world {
        id
        title
        slug
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
      world {
        id
        title
        slug
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
      content
      reckoning
      status
      type
      world {
        id
        title
        slug
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
        world {
          id
          title
          slug
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
      content
      reckoning
      status
      type
      world {
        id
        title
        slug
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
        world {
          id
          title
          slug
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
      content
      reckoning
      status
      type
      world {
        id
        title
        slug
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
        world {
          id
          title
          slug
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
