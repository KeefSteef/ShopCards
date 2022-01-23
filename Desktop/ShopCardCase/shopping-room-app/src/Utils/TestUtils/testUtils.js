export const findByArgument = (component, argumentName) => {
    return component.find(`[data-test="${argumentName}"]`)
}

export const elementStyleCheck = (element) => {
   return element.get(0).props.style
}