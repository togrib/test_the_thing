import React, { Component } from "react";
import Link from "@instructure/ui-elements/lib/components/Link";
import IconExternalLink from "@instructure/ui-icons/lib/Line/IconExternalLink";
import NavLink from "./NavLink";
import { resourceTypes } from "./constants";

export default class WebLinkListItem extends Component {
  render() {
    return (
      <li className="ExpandCollapseList-item">
        <div className="ExpandCollapseList-item-inner">
          <div>
            {this.props.item.type === resourceTypes.WEB_LINK && (
              <span className="resource-icon">
                <IconExternalLink />
              </span>
            )}
          </div>

          <div style={{ flex: 1 }}>
            {this.props.item.href && (
              <Link as={NavLink} to={`resources/${this.props.identifier}`}>
                <span>{this.props.item.title || "Untitled"}</span>
              </Link>
            )}
          </div>
        </div>
      </li>
    );
  }
}
