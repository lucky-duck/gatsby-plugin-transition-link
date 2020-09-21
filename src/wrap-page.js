const React = require('react')
const TransitionHandler = require('./components/TransitionHandler').default
const Layout = require('./components/Layout').LayoutComponent

// eslint-disable-next-line react/prop-types,react/display-name
module.exports = ({ element, props }, pluginOptions) => {
    const isIgnoredPath = pluginOptions.ignorePaths && pluginOptions.ignorePaths.some(path => {
        return new RegExp(path).test(props.location.pathname);
    })

    if (isIgnoredPath) {
        return element;
    }

	return (
		<Layout {...props}>
			<TransitionHandler {...props} {...pluginOptions}>
				{element}
			</TransitionHandler>
		</Layout>
	)
}
