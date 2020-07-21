import React from 'react';
export default class TxComponent<P, S> extends React.PureComponent<P, S> {
    protected button: any;
    constructor(props: P);
    protected sendTx: () => void;
    protected submit: () => void;
}
