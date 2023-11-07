import { GAME } from "../games";

interface WANRS extends GAME {}

export function load(): Promise<WANRS>
