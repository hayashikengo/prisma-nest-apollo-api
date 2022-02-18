import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id: number;
  username: string;
  displayName: string;
  createdAt: Date;
  updatedAt: Date;
}
