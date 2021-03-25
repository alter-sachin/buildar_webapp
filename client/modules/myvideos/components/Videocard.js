import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as FaIcons from "react-icons/fa";

import { Link } from 'react-router-dom';
import humanizedTime from "../../../../server/services/humanizedTime";
class Videocard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: this.props.id,
			title: this.props.title,
			description: this.props.description,
			url: this.props.url,
			timeCreated: this.props.timeCreated,
			isLinkCopied: false,
			thumbnail : this.props.thumbnail
		};
		this.resetMessage = this.resetMessage.bind(this);
		this.humanized_time_span = this.humanized_time_span.bind(this);
	}
	humanized_time_span(date, ref_date, date_formats, time_units) {
		//Date Formats must be be ordered smallest -> largest and must end in a format with ceiling of null
		date_formats = date_formats || {
			past: [
				{ ceiling: 60, text: "$seconds seconds ago" },
				{ ceiling: 3600, text: "$minutes minutes ago" },
				{ ceiling: 86400, text: "$hours hours ago" },
				{ ceiling: 2629744, text: "$days days ago" },
				{ ceiling: 31556926, text: "$months months ago" },
				{ ceiling: null, text: "$years years ago" }      
			],
			future: [
				{ ceiling: 60, text: "in $seconds seconds" },
				{ ceiling: 3600, text: "in $minutes minutes" },
				{ ceiling: 86400, text: "in $hours hours" },
				{ ceiling: 2629744, text: "in $days days" },
				{ ceiling: 31556926, text: "in $months months" },
				{ ceiling: null, text: "in $years years" }
			]
		};
		//Time units must be be ordered largest -> smallest
		time_units = time_units || [
			[31556926, "years"],
			[2629744, "months"],
			[86400, "days"],
			[3600, "hours"],
			[60, "minutes"],
			[1, "seconds"]
		];
		
		date = new Date(date);
		ref_date = ref_date ? new Date(ref_date) : new Date();
		var seconds_difference = (ref_date - date) / 1000;
		
		var tense = "past";
		if (seconds_difference < 0) {
			tense = "future";
			seconds_difference = 0-seconds_difference;
		}
		
		function get_format() {
			for (var i=0; i<date_formats[tense].length; i++) {
				if (date_formats[tense][i].ceiling == null || seconds_difference <= date_formats[tense][i].ceiling) {
					return date_formats[tense][i];
				}
			}
			return null;
		}
		
		function get_time_breakdown() {
			var seconds = seconds_difference;
			var breakdown = {};
			for(var i=0; i<time_units.length; i++) {
				var occurences_of_unit = Math.floor(seconds / time_units[i][0]);
				seconds = seconds - (time_units[i][0] * occurences_of_unit);
				breakdown[time_units[i][1]] = occurences_of_unit;
			}
			return breakdown;
		}
	  
		function render_date(date_format) {
			var breakdown = get_time_breakdown();
			var time_ago_text = date_format.text.replace(/\$(\w+)/g, function() {
				return breakdown[arguments[1]];
			});
			return depluralize_time_ago_text(time_ago_text, breakdown);
		}
		
		function depluralize_time_ago_text(time_ago_text, breakdown) {
			for(var i in breakdown) {
				if (breakdown[i] == 1) {
					var regexp = new RegExp("\\b"+i+"\\b");
					time_ago_text = time_ago_text.replace(regexp, function() {
						return arguments[0].replace(/s\b/g, "");
					});
				}
			}
			return time_ago_text;
		}
				
		return render_date(get_format());
	}
	

	copyLink(url) {
		navigator.clipboard.writeText(url)
		this.setState({
			isLinkCopied: true
		})
	}

	resetMessage() {
		this.setState({
			isLinkCopied: false
		})
	}

	render() {
		const { id, index, title, description, url, timeCreated,thumbnail } = this.props;
		// your link creation
		
		String.prototype.replaceAll = function (find, replace) {
			var str = this;
			return str.replace(new RegExp(find, "g"), replace);
		};
		var newTime = this.state.timeCreated.replaceAll("-","/");
		console.log(newTime);	
		newTime = newTime.replace("T"," ");
		newTime = newTime.replace("Z","");
		newTime = this.humanized_time_span(newTime);
		console.log(newTime);
		const newTo = {
			pathname: "/video",
			param1: this.props.id
		};
		// link to the "location"
		// see (https://reacttraining.com/react-router/web/api/location)

		const isLinkCopied = this.state.isLinkCopied
		return (
			// your route setup

			<div className="myvideo-card-item">
				<div className="myvideo-card">
					<div className="myvideo-card-menu">
						<Dropdown id="myvideo-card-menu-dropdown">
							<Dropdown.Toggle variant="secondary" id="dropdown-basic" size="sm">
								<i className="fa fa-bars"></i>
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item><Link to={newTo}>Edit</Link></Dropdown.Item>
								<Dropdown.Item href="" onClick={() => this.props.deleteHandler(index)}>Delete</Dropdown.Item>
								<Dropdown.Item href="" onClick={() => this.props.duplicateHandler(index)}>Duplicate</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
					<Link to={newTo}>
						<img className="myvideo-thumbnail" src={this.state.thumbnail} />
					</Link>
					<p className="myvideo-title"> {title}</p>
				</div>
				<div onMouseOut={this.resetMessage} className="myvideo-time">
					<p>
						{newTime ? newTime : "NA"}
						{/* <div id="myvideo-footer-icons">
							<label className="btn btn-sm">
								<AiIcons.AiOutlineStar size={20} />
							</label>
							<span className="tooltiptext">Add to favourites</span>
						</div> */}
						<div id="myvideo-footer-icons">
							<label
								className="btn btn-sm"
								onClick={() => this.copyLink(url)}
							>
								<AiIcons.AiOutlineLink size={20} />
							</label>
							<span className="tooltiptext">
								{isLinkCopied ? 'Link Copied' : 'Copy Link'}
							</span>
						</div>
					</p>
				</div>
			</div>
		);
	}
}

export default Videocard;