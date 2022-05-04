import {Icon} from '@iconify/react'
const StrandMarker = ({onClick, icon }) => {
    return (
        <div className="strand-marker" onClick={onClick}>
<Icon icon={icon} width="30" height="30" />
        </div>
    )
}

export default StrandMarker