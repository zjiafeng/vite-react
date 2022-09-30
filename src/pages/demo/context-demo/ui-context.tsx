import React, { createContext, useContext, useState, useCallback } from 'react';
import { initialFilter } from './helpers';
const UiContext = createContext<any>(null);

export function useUIContext() {
    return useContext(UiContext);
}

export const UIProvider = ({ UIEvents, children }: any) => {
    const [queryParams, setQueryParamsBase] = useState(initialFilter);

    const value = {
        queryParams,
        setQueryParamsBase,
        funLog: UIEvents.funLog,
        change: () => {
            setQueryParamsBase({
                pageNumber: 2,
                pageSize: 10,
            })
        }
    }

    return (
        <UiContext.Provider value={value}>{children}</UiContext.Provider>
    )
}