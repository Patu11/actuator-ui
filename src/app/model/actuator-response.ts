export interface ActuatorResponse {
	_links: Links
}

export interface Links {
	self: Self
	beans: Beans
	"caches-cache": CachesCache
	caches: Caches
	"health-path": HealthPath
	health: Health
	info: Info
	conditions: Conditions
	"configprops-prefix": ConfigpropsPrefix
	configprops: Configprops
	env: Env
	"env-toMatch": EnvToMatch
	loggers: Loggers
	"loggers-name": LoggersName
	heapdump: Heapdump
	threaddump: Threaddump
	"metrics-requiredMetricName": MetricsRequiredMetricName
	metrics: Metrics
	scheduledtasks: Scheduledtasks
	mappings: Mappings
}

export interface Self {
	href: string
	templated: boolean
}

export interface Beans {
	href: string
	templated: boolean
}

export interface CachesCache {
	href: string
	templated: boolean
}

export interface Caches {
	href: string
	templated: boolean
}

export interface HealthPath {
	href: string
	templated: boolean
}

export interface Health {
	href: string
	templated: boolean
}

export interface Info {
	href: string
	templated: boolean
}

export interface Conditions {
	href: string
	templated: boolean
}

export interface ConfigpropsPrefix {
	href: string
	templated: boolean
}

export interface Configprops {
	href: string
	templated: boolean
}

export interface Env {
	href: string
	templated: boolean
}

export interface EnvToMatch {
	href: string
	templated: boolean
}

export interface Loggers {
	href: string
	templated: boolean
}

export interface LoggersName {
	href: string
	templated: boolean
}

export interface Heapdump {
	href: string
	templated: boolean
}

export interface Threaddump {
	href: string
	templated: boolean
}

export interface MetricsRequiredMetricName {
	href: string
	templated: boolean
}

export interface Metrics {
	href: string
	templated: boolean
}

export interface Scheduledtasks {
	href: string
	templated: boolean
}

export interface Mappings {
	href: string
	templated: boolean
}
