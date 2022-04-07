import {Icon} from '@iconify/react'
const StrandMarker = ({lat, long, onClick }) => {
    return (
        <div className="strand-marker" onClick={onClick}>
<Icon icon="twemoji:light-bulb" width="30" height="30" />
        </div>
    )
}

export default StrandMarker