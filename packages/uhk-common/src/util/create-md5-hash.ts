import { Buffer } from 'buffer/';
import * as md5 from 'md5';

export function createMd5Hash(buffer: Buffer): string {
    return md5(buffer);
}
