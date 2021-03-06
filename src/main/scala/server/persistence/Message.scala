package org.chicagoscala.awse.server.persistence
import org.chicagoscala.awse.persistence._
import org.chicagoscala.awse.domain.finance._
import net.liftweb.json.JsonAST._
import net.liftweb.json.JsonDSL._

sealed trait Message

/** 
 * Get data corresponding to criteria encoded in the JSON. Note that we don't
 * use a JSONRecord because it is specifically for a single data point at a particular time.
 */
case class Get(json: JValue) extends Message

case class Put(jsonRecord: JSONRecord) extends Message

case object Stop extends Message
