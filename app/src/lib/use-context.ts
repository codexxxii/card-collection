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
  filteredCards: () => Card[];
  input: string;
  handleInput: (input: string) => void;
  isActive: boolean;
  handleIsActive: (isActive: boolean) => void;
  activeCard: null | Card;
  handleActiveCard: (activeCard: Card) => void;
  resetActiveCard: () => void;
};

export const useContext = create<Props>((set, get) => ({
  cards: [],
  handleCards: (cards) => set({ cards }),
  filteredCards: () => {
    const { cards, input } = get();

    return cards.filter((card) =>
      card.name.toLowerCase().includes(input.toLowerCase()),
    );
  },
  input: "",
  handleInput: (input) => set({ input }),
  isActive: false,
  handleIsActive: (isActive) => set({ isActive }),
  activeCard: null,
  handleActiveCard: (activeCard) => set({ activeCard }),
  resetActiveCard: () => set({ activeCard: null }),
}));
