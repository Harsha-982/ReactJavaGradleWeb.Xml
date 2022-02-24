@rem
@rem Copyright 2015 the original author or authors.
@rem
@rem Licensed under the Apache License, Version 2.0 (the "License");
@rem you may not use this file except in compliance with the License.
@rem You may obtain a copy of the License at
@rem
@rem      https://www.apache.org/licenses/LICENSE-2.0
@rem
@rem Unless required by applicable law or agreed to in writing, software
@rem distributed under the License is distributed on an "AS IS" BASIS,
@rem WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
@rem See the License for the specific language governing permissions and
@rem limitations under the License.
@rem

@if "%DEBUG%" == "" @echo off
@rem ##########################################################################
@rem
@rem  ReactJavaGradleWeb.Xml startup script for Windows
@rem
@rem ##########################################################################

@rem Set local scope for the variables with windows NT shell
if "%OS%"=="Windows_NT" setlocal

set DIRNAME=%~dp0
if "%DIRNAME%" == "" set DIRNAME=.
set APP_BASE_NAME=%~n0
set APP_HOME=%DIRNAME%..

@rem Resolve any "." and ".." in APP_HOME to make it shorter.
for %%i in ("%APP_HOME%") do set APP_HOME=%%~fi

@rem Add default JVM options here. You can also use JAVA_OPTS and REACT_JAVA_GRADLE_WEB_XML_OPTS to pass JVM options to this script.
set DEFAULT_JVM_OPTS=

@rem Find java.exe
if defined JAVA_HOME goto findJavaFromJavaHome

set JAVA_EXE=java.exe
%JAVA_EXE% -version >NUL 2>&1
if "%ERRORLEVEL%" == "0" goto execute

echo.
echo ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.
echo.
echo Please set the JAVA_HOME variable in your environment to match the
echo location of your Java installation.

goto fail

:findJavaFromJavaHome
set JAVA_HOME=%JAVA_HOME:"=%
set JAVA_EXE=%JAVA_HOME%/bin/java.exe

if exist "%JAVA_EXE%" goto execute

echo.
echo ERROR: JAVA_HOME is set to an invalid directory: %JAVA_HOME%
echo.
echo Please set the JAVA_HOME variable in your environment to match the
echo location of your Java installation.

goto fail

:execute
@rem Setup the command line

set CLASSPATH=%APP_HOME%\lib\ReactJavaGradleWeb.Xml-1.0-SNAPSHOT.jar;%APP_HOME%\lib\google-cloud-datastore-1.104.0.jar;%APP_HOME%\lib\apache-jsp-9.4.43.v20210629.jar;%APP_HOME%\lib\jetty-annotations-9.4.43.v20210629.jar;%APP_HOME%\lib\jetty-plus-9.4.43.v20210629.jar;%APP_HOME%\lib\jetty-webapp-9.4.43.v20210629.jar;%APP_HOME%\lib\jetty-servlet-9.4.43.v20210629.jar;%APP_HOME%\lib\jetty-security-9.4.43.v20210629.jar;%APP_HOME%\lib\jetty-server-9.4.43.v20210629.jar;%APP_HOME%\lib\google-cloud-core-http-1.93.6.jar;%APP_HOME%\lib\google-auth-library-credentials-0.20.0.jar;%APP_HOME%\lib\google-api-client-1.30.9.jar;%APP_HOME%\lib\google-http-client-appengine-1.35.0.jar;%APP_HOME%\lib\gax-httpjson-0.74.0.jar;%APP_HOME%\lib\gson-2.8.6.jar;%APP_HOME%\lib\jsr305-3.0.2.jar;%APP_HOME%\lib\opencensus-contrib-http-util-0.24.0.jar;%APP_HOME%\lib\proto-google-cloud-datastore-v1-0.87.0.jar;%APP_HOME%\lib\datastore-v1-proto-client-1.6.3.jar;%APP_HOME%\lib\google-http-client-protobuf-1.35.0.jar;%APP_HOME%\lib\grpc-api-1.30.0.jar;%APP_HOME%\lib\grpc-context-1.30.0.jar;%APP_HOME%\lib\animal-sniffer-annotations-1.18.jar;%APP_HOME%\lib\api-common-1.9.2.jar;%APP_HOME%\lib\javax.annotation-api-1.3.2.jar;%APP_HOME%\lib\auto-value-annotations-1.7.2.jar;%APP_HOME%\lib\threetenbp-1.4.4.jar;%APP_HOME%\lib\protobuf-java-3.12.2.jar;%APP_HOME%\lib\gax-1.57.0.jar;%APP_HOME%\lib\guava-29.0-android.jar;%APP_HOME%\lib\failureaccess-1.0.1.jar;%APP_HOME%\lib\listenablefuture-9999.0-empty-to-avoid-conflict-with-guava.jar;%APP_HOME%\lib\checker-compat-qual-2.5.5.jar;%APP_HOME%\lib\error_prone_annotations-2.3.4.jar;%APP_HOME%\lib\j2objc-annotations-1.3.jar;%APP_HOME%\lib\google-cloud-core-1.93.6.jar;%APP_HOME%\lib\protobuf-java-util-3.12.2.jar;%APP_HOME%\lib\proto-google-iam-v1-0.13.0.jar;%APP_HOME%\lib\proto-google-common-protos-1.18.0.jar;%APP_HOME%\lib\google-http-client-1.35.0.jar;%APP_HOME%\lib\httpclient-4.5.12.jar;%APP_HOME%\lib\commons-logging-1.2.jar;%APP_HOME%\lib\commons-codec-1.11.jar;%APP_HOME%\lib\httpcore-4.4.13.jar;%APP_HOME%\lib\google-http-client-jackson2-1.35.0.jar;%APP_HOME%\lib\jackson-core-2.11.0.jar;%APP_HOME%\lib\google-oauth-client-1.30.6.jar;%APP_HOME%\lib\google-auth-library-oauth2-http-0.20.0.jar;%APP_HOME%\lib\opencensus-api-0.24.0.jar;%APP_HOME%\lib\javax.servlet-api-3.1.0.jar;%APP_HOME%\lib\jetty-http-9.4.43.v20210629.jar;%APP_HOME%\lib\jetty-io-9.4.43.v20210629.jar;%APP_HOME%\lib\jetty-util-ajax-9.4.43.v20210629.jar;%APP_HOME%\lib\jetty-xml-9.4.43.v20210629.jar;%APP_HOME%\lib\jetty-jndi-9.4.43.v20210629.jar;%APP_HOME%\lib\jetty-util-9.4.43.v20210629.jar;%APP_HOME%\lib\apache-jsp-8.5.54.jar;%APP_HOME%\lib\jetty-schemas-3.1.2.jar;%APP_HOME%\lib\asm-commons-9.1.jar;%APP_HOME%\lib\asm-analysis-9.1.jar;%APP_HOME%\lib\asm-tree-9.1.jar;%APP_HOME%\lib\asm-9.1.jar;%APP_HOME%\lib\apache-el-8.5.54.jar;%APP_HOME%\lib\ecj-3.19.0.jar


@rem Execute ReactJavaGradleWeb.Xml
"%JAVA_EXE%" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %REACT_JAVA_GRADLE_WEB_XML_OPTS%  -classpath "%CLASSPATH%" MainServer %*

:end
@rem End local scope for the variables with windows NT shell
if "%ERRORLEVEL%"=="0" goto mainEnd

:fail
rem Set variable REACT_JAVA_GRADLE_WEB_XML_EXIT_CONSOLE if you need the _script_ return code instead of
rem the _cmd.exe /c_ return code!
if  not "" == "%REACT_JAVA_GRADLE_WEB_XML_EXIT_CONSOLE%" exit 1
exit /b 1

:mainEnd
if "%OS%"=="Windows_NT" endlocal

:omega
