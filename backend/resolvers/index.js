// To merge the resolvers
// If we don't merge them then we will have to put them in a file.
// Will result in really long file and unmanageable as the project grows
import { mergeResolvers } from "@graphql-tools/merge";

import userResolver from "./user.resolver.js";
import transactionResolver from "./transaction.resolver.js";

// Send the resolvers as an array in the argument
const mergedResolvers = mergeResolvers([userResolver, transactionResolver]);

export default mergedResolvers;