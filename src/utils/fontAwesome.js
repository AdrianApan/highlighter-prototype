import {library} from "@fortawesome/fontawesome-svg-core"

import {
    faUpload,
    faTrash
} from '@fortawesome/free-solid-svg-icons'

export function FontAwesome() {
	library.add(
        faUpload,
        faTrash
    )
}