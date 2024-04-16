import { atomWithStorage } from "jotai/utils";

export const _userAuth_ = atomWithStorage<string | boolean>("userAuth", "loading");
