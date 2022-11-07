import fs from 'fs/promises';
import bcrypt from 'bcryptjs';
import path from 'path';

import type { NextApiRequest, NextApiResponse } from 'next';
import { TRes, TUser } from '../../types/user';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TRes>
) {
  const { name, password } = req.body;

  const data = await fs.readFile(path.join(process.cwd(), 'users.db'));
  const users: TUser[] = JSON.parse(data as unknown as string);
  const user = users.find((user) => user.name === name);
  if (!user) {
    res.status(404).json({ message: `Wrong username or password` });
    return;
  }

  const hash = await bcrypt.compare(password, user.password);
  if (!hash) {
    res.status(404).json({ message: `Wrong username or password` });
    return;
  }

  res.status(200).json({ message: `Welcome in` });
}
