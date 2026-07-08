import { create } from "zustand";

export type Card = {
  id: string;
  image_front: string;
  image_back: string;
  name: string;
};

type Props = {
  cards: Card[];
  handleCards: (cards: Card[]) => void;
  isActive: boolean;
  handleIsActive: (isActive: boolean) => void;
  activeCard: null | Card;
  handleActiveCard: (activeCard: Card) => void;
  resetActiveCard: () => void;
};

export const useContext = create<Props>((set) => ({
  cards: [],
  handleCards: (cards) => set({ cards }),
  isActive: false,
  handleIsActive: (isActive) => set({ isActive }),
  activeCard: null,
  handleActiveCard: (activeCard) => set({ activeCard }),
  resetActiveCard: () => set({ activeCard: null }),
}));
