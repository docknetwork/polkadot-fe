import React from 'react';
export interface TabItem {
    alias?: string;
    hasParams?: boolean;
    isExact?: boolean;
    isRoot?: boolean;
    name: string;
    text: React.ReactNode;
}
