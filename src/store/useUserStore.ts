import { create } from "zustand";
import reflex from "@/lib/reflex";
import { toast } from "react-hot-toast";

interface CartItem {
  quantity: number;
  productId: string; 
}

interface User {
  _id: string;
  fullname: string;
  country: string;
  email: string;
  password: string;
  cartItems: CartItem[];
  refreshToken: string;
  createdAt: string;
  updatedAt: string;
}

interface UserStore {
  user: User | null;
  signupLoading: boolean;
  signinLoading: boolean;
  checkingAuth: boolean;
  checkAuthLoading: boolean;

  signup: (
    fullname: string,
    email: string,
    password: string,
    country: string
  ) => Promise<void>;

  login: (email: string, password: string) => Promise<void>;

  logout: () => Promise<void>;

  checkAuth: () => Promise<void>;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  signupLoading: false,
  signinLoading: false,
  checkingAuth: true,
  checkAuthLoading: false,

  signup: async (fullname, email, password, country) => {
    set({ signupLoading: true });

    if (!fullname || !email || !password || !country) {
      set({ signupLoading: false });
      return;
    }

    try {
      const res = await reflex.post("/auth/signup", {
        fullname,
        email,
        password,
        country,
      });
      set({ user: res.data.user, signupLoading: false, checkingAuth: false });

      toast.success("Account created successfully");
    } catch (error: unknown) {
      console.error(error);
      set({ signupLoading: false });
      if (error instanceof Error) {
        toast.error(error.message || "Something went wrong");
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      set({ signupLoading: false });
    }
  },

  login: async (email, password) => {
    set({ signinLoading: true });
    try {
      const res = await reflex.post("/auth/login", {
        email,
        password,
      });
      set({ user: res.data.user, signinLoading: false, checkingAuth: false });

      toast.success("Logged in successfully");
    } catch (error: unknown) {
      console.error(error);
      set({ signinLoading: false });
      if (error instanceof Error) {
        toast.error(error.message || "Something went wrong");
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      set({ signinLoading: false });
    }
  },

  logout: async () => {
    try {
      await reflex.post("/auth/logout");
      set({ user: null });
    } catch (error: unknown) {
      console.error(error);
      if (error instanceof Error) {
        toast.error(error.message || "Something went wrong");
      } else {
        toast.error("Something went wrong");
      }
    }
  },

  checkAuth: async () => {
    set({ checkingAuth: true, checkAuthLoading: true });
    try {
      const res = await reflex.get("/auth/profile");
      set({
        user: res.data.user,
        checkingAuth: false,
        checkAuthLoading: false,
      });
    } catch (error: unknown) {
      set({ user: null, checkingAuth: false, checkAuthLoading: false });
      if (error instanceof Error) {
        toast.error(error.message || "Something went wrong");
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      set({ checkAuthLoading: false });
    }
  },
}));
