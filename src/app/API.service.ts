/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateToDosInput = {
  name?: string | null;
  desc?: string | null;
};

export type UpdateToDosInput = {
  id: string;
  name?: string | null;
  desc?: string | null;
};

export type DeleteToDosInput = {
  id: string;
};

export type TableToDosFilterInput = {
  id?: TableStringFilterInput | null;
  name?: TableStringFilterInput | null;
  desc?: TableStringFilterInput | null;
};

export type TableStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type CreateToDosMutation = {
  __typename: "ToDos";
  id: string;
  name: string | null;
  desc: string | null;
};

export type UpdateToDosMutation = {
  __typename: "ToDos";
  id: string;
  name: string | null;
  desc: string | null;
};

export type DeleteToDosMutation = {
  __typename: "ToDos";
  id: string;
  name: string | null;
  desc: string | null;
};

export type GetToDosQuery = {
  __typename: "ToDos";
  id: string;
  name: string | null;
  desc: string | null;
};

export type ListToDosQuery = {
  __typename: "ToDosConnection";
  items: Array<{
    __typename: "ToDos";
    id: string;
    name: string | null;
    desc: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateToDosSubscription = {
  __typename: "ToDos";
  id: string;
  name: string | null;
  desc: string | null;
};

export type OnUpdateToDosSubscription = {
  __typename: "ToDos";
  id: string;
  name: string | null;
  desc: string | null;
};

export type OnDeleteToDosSubscription = {
  __typename: "ToDos";
  id: string;
  name: string | null;
  desc: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateToDos(input: CreateToDosInput): Promise<CreateToDosMutation> {
    const statement = `mutation CreateToDos($input: CreateToDosInput!) {
        createToDos(input: $input) {
          __typename
          id
          name
          desc
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateToDosMutation>response.data.createToDos;
  }
  async UpdateToDos(input: UpdateToDosInput): Promise<UpdateToDosMutation> {
    const statement = `mutation UpdateToDos($input: UpdateToDosInput!) {
        updateToDos(input: $input) {
          __typename
          id
          name
          desc
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateToDosMutation>response.data.updateToDos;
  }
  async DeleteToDos(input: DeleteToDosInput): Promise<DeleteToDosMutation> {
    const statement = `mutation DeleteToDos($input: DeleteToDosInput!) {
        deleteToDos(input: $input) {
          __typename
          id
          name
          desc
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteToDosMutation>response.data.deleteToDos;
  }
  async GetToDos(id: string): Promise<GetToDosQuery> {
    const statement = `query GetToDos($id: String!) {
        getToDos(id: $id) {
          __typename
          id
          name
          desc
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetToDosQuery>response.data.getToDos;
  }
  async ListToDos(
    filter?: TableToDosFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListToDosQuery> {
    const statement = `query ListToDos($filter: TableToDosFilterInput, $limit: Int, $nextToken: String) {
        listToDos(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            desc
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListToDosQuery>response.data.listToDos;
  }
  OnCreateToDosListener: Observable<OnCreateToDosSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateToDos($id: String, $name: String, $desc: String) {
        onCreateToDos(id: $id, name: $name, desc: $desc) {
          __typename
          id
          name
          desc
        }
      }`
    )
  ) as Observable<OnCreateToDosSubscription>;

  OnUpdateToDosListener: Observable<OnUpdateToDosSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateToDos($id: String, $name: String, $desc: String) {
        onUpdateToDos(id: $id, name: $name, desc: $desc) {
          __typename
          id
          name
          desc
        }
      }`
    )
  ) as Observable<OnUpdateToDosSubscription>;

  OnDeleteToDosListener: Observable<OnDeleteToDosSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteToDos($id: String, $name: String, $desc: String) {
        onDeleteToDos(id: $id, name: $name, desc: $desc) {
          __typename
          id
          name
          desc
        }
      }`
    )
  ) as Observable<OnDeleteToDosSubscription>;
}
