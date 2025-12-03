export interface ITab {
  tabs: { value: string; label: string }[];
  activeTab: string;
  setActiveTab: (value: string) => void;
}
