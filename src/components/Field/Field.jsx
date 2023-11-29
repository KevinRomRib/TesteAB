import { styled } from "styled-components";

export const Field = styled.div`
    flex: ${(props) => props?.flex};
    width: ${(props) => props?.width};
    max-width: ${(props) => props?.maxWidth};
    min-width: ${(props) => props?.minWidth};
    height: ${(props) => props?.height};
    max-height: ${(props) => props?.maxHeight};
    min-height: ${(props) => props?.minHeight};
    border-radius: ${(props) => props?.borderRadius};
    border: ${(props) => props?.border};
    background-color: ${(props) => props?.backgroundColor};
    background: ${(props) => props?.background};
    backdrop-filter: ${(props) => props?.backdropFilter};
    position: ${(props) => props?.position};
    top: ${(props) => props?.top};
    bottom: ${(props) => props?.bottom};
    left: ${(props) => props?.left};
    right: ${(props) => props?.right};
    display: ${(props) => props?.display};
    justify-content: ${(props) => props?.justifyContent};
    flex-direction: ${(props) => props?.flexDirection};
    align-items: ${(props) => props?.alignItems};
    gap: ${(props) => props?.gap};
    padding: ${(props) => props?.padding};
    padding-top: ${(props) => props?.paddingTop};
    padding-bottom: ${(props) => props?.paddingBottom};
    padding-left: ${(props) => props?.paddingLeft};
    padding-right: ${(props) => props?.paddingRight};
    margin-top: ${(props) => props?.marginTop};
    margin-bottom: ${(props) => props?.marginBottom};
    margin-left: ${(props) => props?.marginLeft};
    margin-right: ${(props) => props?.marginRight};
    margin: ${(props) => props?.margin};
    filter: ${(props) => props?.filter};
    box-shadow: ${(props) => props?.boxShadow};
    overflow: ${(props) => props?.overflow};
    overflow-x: ${(props) => props?.overflowX};
    overflow-y: ${(props) => props?.overflowY};
    cursor: ${(props) => props?.cursor};
    flex-wrap: ${(props) => props?.flexWrap};
    font-size: ${(props) => props?.fontSize};
    color: ${(props) => props?.color};
    flex-grow: ${(props) => props?.flexGrow};
    z-index: ${(props) => props?.zIndex};
    &::-webkit-scrollbar {
        width: 12px;
    }
    &::-webkit-scrollbar-thumb {
        background: #333385;
        border-radius: 6px; 
    }
`;