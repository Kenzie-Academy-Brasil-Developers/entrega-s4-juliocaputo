import listOneCategoryService from "../../services/categoriesServices/listOneCategory.services"

const listOneCategoryController = async (request, response) => {

    const { id } = request.params

    try {
        const category = await listOneCategoryService(id)

        return response.status(200).json(category)
    }
    catch (err) {
        return response.status(400).json({ message: err.message })
    }

}

export default listOneCategoryController