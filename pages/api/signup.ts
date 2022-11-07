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
  const notUniq = users.some((user) => user.name === name);
  if (notUniq) {
    res.status(409).json({ message: 'User with that name already exists' });
    return;
  }

  const hash = await bcrypt.hash(password, 10);
  users.push({ name, password: hash });
  fs.writeFile(path.join(process.cwd(), 'users.db'), JSON.stringify(users));

  res.status(200).json({ message: `User ${name} registered` });
}
