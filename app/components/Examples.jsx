var React = require('react');
var {Link} = require('react-router');

var Examples = (propd) => {
    return (
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Here are a few Examples to try out:</p>
            <ol>
                <li>
                    <Link to='/?location=London'>London</Link>
                </li>
                <li>
                    <Link to='/?location=Ongole'>Ongole</Link>
                </li>
            </ol>
        </div>
    )
};

module.exports = Examples;