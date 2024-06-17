import { createContext, useState, useContext, ReactNode, FC } from "react";

type formData = {
    user_name: string,
    user_email: string,
    user_phone: string,
    user_pass: string
}

type UserContextType = {
    user: formData | null;
    setUser: (user: formData) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<formData | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("Context bulunamadı");
    }
    return context;
};