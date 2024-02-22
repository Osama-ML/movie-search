export const styles = /* css */ `
    <style>
        :host{
            position: absolute;
            width: 100%;
            height: 100%;
        }
        :host[hiddingloader="true"] {
            display: none;
            z-index: -1;
        }
        div {
            color: white;
            width: 100%;
            height: 100%;
            background-color: #1b1b1b;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 5;
        }
        svg {
            flex: 1;
        }
    </style>
`;
