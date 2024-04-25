export default (props: {
    //
    'data-refid'?: string,
    className?: string
    href?: string,
    children?: any
}) => {
    return <a {...props}>{props.children}</a>
}