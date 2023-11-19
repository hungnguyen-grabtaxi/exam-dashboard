import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";

export interface BreadcrumItem {
	label: string;
	url?: string;
}

class CommonStore {
	breadcrumItems?: BreadcrumItem[];

	constructor() {
		makeAutoObservable(this);
	}

	// Action
	setBreadcrum(items: BreadcrumItem[]) {
		this.breadcrumItems = items;
	}
}

// For use directly outside React components
export const commonStore = new CommonStore();

const CommonStoreContext = createContext(commonStore);

// Hook for use inside components
export const useCommonStore = () => {
	return useContext(CommonStoreContext);
};
