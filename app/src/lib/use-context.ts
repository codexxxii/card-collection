import { create } from "zustand";

type Card = {
  id: string;
  image_front: string;
  image_back: string;
  name: string;
};

type Props = {
  cards: Card[];
  handleCards: (cards: Card[]) => void;
};

export const useContext = create<Props>((set) => ({
  cards: [],
  handleCards: (cards) => set({ cards }),
}));
