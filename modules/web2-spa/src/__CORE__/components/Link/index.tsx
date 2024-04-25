export default (props: {
    //
    'data-refid'?: string,
    className?: string
    href?: string,
    target?: string,
    children?: any
}) => {
    return <a {...props}>{props.children}</a>
}