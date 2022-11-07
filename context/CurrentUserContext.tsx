import React, { createContext, FC, ReactNode, useContext, useState } from 'react';

interface IUser {
  name: string;
}

interface IUserContext {
  currentUser: IUser | null;
  setCurrentUser: (user: IUser) => void;
}

const CurrentUserContext = createContext<IUserContext>({
  currentUser: null,
  setCurrentUser: async (user) => null,
});

interface IUserPropviderProps {
  children: ReactNode
}

export const UserProvider: FC<IUserPropviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);

  return (
    <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
      {children}
    </CurrentUserContext.Provider>
  );
}

export const useUserContext = () => useContext(CurrentUserContext)
