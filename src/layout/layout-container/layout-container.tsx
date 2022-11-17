import './layout-container.scss'
export const LayoutContaier = ({ ...props }: any) => {
  return <div className='container'>{props.children}</div>
}
